const AdminNavPanel: React.FC = () => {
  return (
    <div className="admin-nav-panel">
      <h2>Admin Navigation</h2>
      <ul>
        <li>
          <a href="/admin/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/admin/users">Users</a>
        </li>
        <li>
          <a href="/admin/settings">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavPanel;
