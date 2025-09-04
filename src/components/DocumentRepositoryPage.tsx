import React from 'react';
import { Folder, File, Upload, Search, FileText, FileImage, FileArchive } from 'lucide-react';

const DocumentRepositoryPage: React.FC = () => {
  const documents = [
    { id: 1, name: 'PAN Card.pdf', type: 'pdf', size: '1.2 MB', date: '2023-10-15' },
    { id: 2, name: 'Address Proof.jpg', type: 'image', size: '800 KB', date: '2023-10-12' },
    { id: 3, name: 'Bank Statement.pdf', type: 'pdf', size: '2.5 MB', date: '2023-10-10' },
    { id: 4, name: 'Business Registration.pdf', type: 'pdf', size: '3.1 MB', date: '2023-10-05' },
    { id: 5, name: 'Other Documents.zip', type: 'archive', size: '10.5 MB', date: '2023-10-02' },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-8 w-8 text-red-500" />;
      case 'image':
        return <FileImage className="h-8 w-8 text-blue-500" />;
      case 'archive':
        return <FileArchive className="h-8 w-8 text-yellow-500" />;
      default:
        return <File className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Document Repository</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Securely store and manage all your GST-related documents.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full sm:w-80 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-10 pr-4 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
              <Upload className="h-5 w-5 mr-2" />
              Upload Document
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Name</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300 hidden sm:table-cell">Size</th>
                  <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300 hidden md:table-cell">Date Added</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="p-4 flex items-center">
                      {getFileIcon(doc.type)}
                      <span className="ml-4 font-medium text-gray-900 dark:text-white">{doc.name}</span>
                    </td>
                    <td className="p-4 text-gray-600 dark:text-gray-400 hidden sm:table-cell">{doc.size}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-400 hidden md:table-cell">{doc.date}</td>
                    <td className="p-4 text-right">
                      <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">...</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentRepositoryPage;
