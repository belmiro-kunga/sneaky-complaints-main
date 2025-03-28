
import React from 'react';
import { Shield } from "lucide-react";

interface ReportHeaderProps {
  title?: string;
  description?: string;
  note?: string;
}

const ReportHeader = ({ 
  title = "Canal de Denúncias", 
  description = "Faça sua denúncia de forma segura. Você pode optar por se identificar ou permanecer anônimo.",
  note = "Ao enviar sua denúncia, você receberá um código único de acompanhamento. Guarde-o para verificar o status da sua denúncia posteriormente."
}: ReportHeaderProps) => {
  return (
    <div className="mb-8 text-center">
      <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
        <Shield className="h-8 w-8 text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      {description && (
        <p className="text-gray-600 max-w-xl mx-auto mb-2">
          {description}
        </p>
      )}
      {note && (
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          {note}
        </p>
      )}
    </div>
  );
};

export default ReportHeader;
