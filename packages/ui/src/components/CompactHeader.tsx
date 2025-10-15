interface CompactHeaderProps {
  onClear: () => void;
  onRefresh: () => void;
  hasConversations: boolean;
  onNavigateToConfig: () => void;
  onNavigateToCheckRules?: () => void;
}

export function CompactHeader({
  onClear,
  onRefresh,
  hasConversations,
  onNavigateToConfig,
  onNavigateToCheckRules,
}: CompactHeaderProps) {
  return (
    <div className="compact-header">
      <div className="header-left">
        <h2 className="app-title">DocMate</h2>
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
        <button
          className="header-action-button config-button"
          onClick={onNavigateToConfig}
          title="设置"
        >
          ⚙️
        </button>
        {onNavigateToCheckRules && (
          <button
            className="header-action-button rules-button"
            onClick={onNavigateToCheckRules}
            title="检查规则管理"
          >
            📋
          </button>
        )}
      </div>
    </div>
  );
}
