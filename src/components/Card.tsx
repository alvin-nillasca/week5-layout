import React from 'react';

export default function Card({ project }: { project: any }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-xs font-mono text-gray-400">#{project.id}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
        <span>Difficulty</span>
        <span className="font-medium text-gray-700">{project.difficulty}</span>
      </div>
    </div>
  );
}