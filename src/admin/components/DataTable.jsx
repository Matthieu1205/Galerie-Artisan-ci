import { useState, useMemo } from 'react'
import Icon from '../../components/Icon.jsx'

export default function DataTable({ columns, data, searchKey, actions, pageSize = 10, emptyText = 'Aucune donnée.' }) {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  const filtered = useMemo(() => {
    if (!search || !searchKey) return data
    const s = search.toLowerCase()
    return data.filter(row =>
      searchKey.some(k => String(row[k] || '').toLowerCase().includes(s))
    )
  }, [search, data, searchKey])

  const sorted = useMemo(() => {
    if (!sortBy) return filtered
    return [...filtered].sort((a, b) => {
      const av = a[sortBy], bv = b[sortBy]
      if (av === bv) return 0
      const dir = sortDir === 'asc' ? 1 : -1
      return av > bv ? dir : -dir
    })
  }, [filtered, sortBy, sortDir])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const start = (page - 1) * pageSize
  const items = sorted.slice(start, start + pageSize)

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(key)
      setSortDir('asc')
    }
  }

  return (
    <div className="dt-wrapper">
      {searchKey && (
        <div className="dt-toolbar">
          <div className="dt-search">
            <Icon name="search" size={16} color="var(--color-gray-400)" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1) }}
            />
          </div>
          <div className="dt-count">
            <strong>{sorted.length}</strong> résultat{sorted.length > 1 ? 's' : ''}
          </div>
        </div>
      )}

      <div className="dt-scroll">
        <table className="dt-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  onClick={col.sortable !== false ? () => handleSort(col.key) : undefined}
                  className={col.sortable !== false ? 'dt-sortable' : ''}
                  style={{ width: col.width, textAlign: col.align || 'left' }}
                >
                  <span className="dt-th-inner">
                    {col.label}
                    {sortBy === col.key && (
                      <span className="dt-sort-arrow">{sortDir === 'asc' ? '▴' : '▾'}</span>
                    )}
                  </span>
                </th>
              ))}
              {actions && <th style={{ width: 80, textAlign: 'right' }}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (actions ? 1 : 0)} className="dt-empty">
                  {emptyText}
                </td>
              </tr>
            ) : items.map((row, i) => (
              <tr key={row.id || i}>
                {columns.map(col => (
                  <td key={col.key} style={{ textAlign: col.align || 'left' }}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                {actions && (
                  <td style={{ textAlign: 'right' }}>
                    <div className="dt-actions">
                      {actions.map((action, k) => (
                        <button
                          key={k}
                          onClick={() => action.onClick(row)}
                          className={`dt-action ${action.variant === 'danger' ? 'dt-action--danger' : ''}`}
                          title={action.label}
                          aria-label={action.label}
                        >
                          <Icon name={action.icon} size={14} />
                        </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="dt-pagination">
          <span className="dt-page-info">
            Page <strong>{page}</strong> sur {totalPages} · {sorted.length} éléments
          </span>
          <div className="dt-page-actions">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="dt-page-btn"
            >
              Précédent
            </button>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(p => p + 1)}
              className="dt-page-btn"
            >
              Suivant
            </button>
          </div>
        </div>
      )}

      <style>{`
        .dt-wrapper {
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-gray-100);
          overflow: hidden;
        }

        .dt-toolbar {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid var(--color-gray-100);
          flex-wrap: wrap;
        }

        .dt-search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
          width: 320px;
          max-width: 100%;
          border: 2px solid transparent;
          transition: all var(--transition);
        }

        .dt-search:focus-within {
          background: white;
          border-color: var(--color-orange);
        }

        .dt-search input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-size: 13px;
          color: var(--color-black);
        }

        .dt-count {
          font-size: 13px;
          color: var(--color-gray-500);
        }

        .dt-count strong {
          color: var(--color-orange);
        }

        .dt-scroll {
          overflow-x: auto;
        }

        .dt-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13.5px;
        }

        .dt-table thead {
          background: var(--color-gray-50);
        }

        .dt-table th {
          padding: 14px 20px;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-gray-500);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-bottom: 1px solid var(--color-gray-100);
          white-space: nowrap;
        }

        .dt-sortable {
          cursor: pointer;
          user-select: none;
        }

        .dt-sortable:hover {
          color: var(--color-black);
        }

        .dt-th-inner {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .dt-sort-arrow {
          color: var(--color-orange);
          font-size: 12px;
        }

        .dt-table td {
          padding: 16px 20px;
          color: var(--color-gray-700);
          border-bottom: 1px solid var(--color-gray-100);
          vertical-align: middle;
        }

        .dt-table tbody tr {
          transition: background var(--transition);
        }

        .dt-table tbody tr:hover {
          background: var(--color-gray-50);
        }

        .dt-table tbody tr:last-child td {
          border-bottom: none;
        }

        .dt-empty {
          text-align: center !important;
          padding: 48px 20px !important;
          color: var(--color-gray-400);
        }

        .dt-actions {
          display: inline-flex;
          gap: 6px;
        }

        .dt-action {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: var(--color-gray-50);
          color: var(--color-gray-600);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition);
        }

        .dt-action:hover {
          background: var(--color-black);
          color: white;
        }

        .dt-action--danger:hover {
          background: var(--color-orange);
          color: white;
        }

        .dt-pagination {
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--color-gray-100);
          background: var(--color-gray-50);
        }

        .dt-page-info {
          font-size: 12px;
          color: var(--color-gray-500);
        }

        .dt-page-info strong {
          color: var(--color-black);
        }

        .dt-page-actions {
          display: flex;
          gap: 8px;
        }

        .dt-page-btn {
          padding: 8px 14px;
          background: white;
          color: var(--color-gray-700);
          border: 1px solid var(--color-gray-100);
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 600;
          transition: all var(--transition);
        }

        .dt-page-btn:hover:not(:disabled) {
          border-color: var(--color-orange);
          color: var(--color-orange);
        }

        .dt-page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}
