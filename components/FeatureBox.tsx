import { ReactNode } from 'react';

interface FeatureBoxProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureBox({ icon, title, description }: FeatureBoxProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl card-hover text-center">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center text-blue-600 text-3xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
