import { AuthStatus } from './AuthStatus';

interface CompactHeaderProps {
  onClear: () => void;
  onRefresh: () => void;
  hasConversations: boolean;
  onAuthChange: (isAuthenticated: boolean) => void;
}

export function CompactHeader({ 
  onClear, 
  onRefresh, 
  hasConversations, 
  onAuthChange 
}: CompactHeaderProps) {
  return (
    <div className="compact-header">
      <div className="header-left">
        <h2 className="app-title">DocMate</h2>
        <div className="header-divider">|</div>
        <span className="conversation-status">
          {hasConversations ? '对话进行中' : '等待开始'}
        </span>
      </div>
      
      <div className="header-center">
        <AuthStatus onAuthChange={onAuthChange} />
      </div>
      
      <div className="header-right">
        {hasConversations && (
          <button
            className="header-action-button clear-button"
            onClick={onClear}
            title="清除对话历史"
          >
            🗑️
          </button>
        )}
        <button
          className="header-action-button refresh-button"
          onClick={onRefresh}
          title="刷新"
        >
          🔄
        </button>
      </div>
    </div>
  );
}
