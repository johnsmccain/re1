import { Copy, Share2 } from 'lucide-react';

export const ReferralLink = () => {
  const referralLink = "https://byforex.com/ref/0x1234...5678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    // In a real app, you'd want to show a toast notification here
  };

  return (
    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold mb-1">Your Referral Link</h3>
          <p className="text-gray-400 text-sm font-mono break-all">{referralLink}</p>
        </div>
        <div className="flex space-x-2 w-full sm:w-auto justify-end">
          <button
            onClick={copyToClipboard}
            className="p-2 bg-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
          >
            <Copy size={20} />
          </button>
          <button className="p-2 bg-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};