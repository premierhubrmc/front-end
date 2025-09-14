import React, { useState, useEffect } from "react";
import { 
  BarChart3, 
  BookOpen, 
  Calendar, 
  Users, 
  Settings, 
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Activity
} from "lucide-react";
import "./admin.css";
import TrainingForm from "./TrainingForm";
import EventForm from "./EventForm"

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Scroll to top when activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const menuItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "trainings", label: "Manage Trainings", icon: BookOpen },
    { id: "events", label: "Manage Events", icon: Calendar },
    { id: "users", label: "Users", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const stats = [
    { label: "Total Users", value: "2,847", change: "+12%", icon: Users, color: "blue" },
    { label: "Active Trainings", value: "24", change: "+3", icon: BookOpen, color: "indigo" },
    { label: "Upcoming Events", value: "8", change: "+2", icon: Calendar, color: "purple" },
    { label: "Completion Rate", value: "94%", change: "+5%", icon: TrendingUp, color: "cyan" },
  ];

  return (
    <div className="admin-dashboard">
            {/* Header */}
        <header className="main-header">
          <div className="header-content">
            <div className="header-left">
              <button
                onClick={() => setSidebarOpen(true)}
                className="mobile-menu-btn"
              >
                <Menu size={20} />
              </button>
              <div className="header-title">
                <h1>{menuItems.find(item => item.id === activeTab)?.label}</h1>
                <p>Manage your platform efficiently</p>
              </div>
            </div>
            <div className="header-right">
              <div className="activity-icon">
                <Activity size={16} />
              </div>
            </div>
          </div>
        </header>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          {/* Logo */}
          <div className="sidebar-header">
            <div className="logo-container">
              <div className="logo-icon">
                <Sparkles size={24} />
              </div>
              <h2 className="logo-text">Admin Panel</h2>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="close-btn"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu */}
          <nav className="menu">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User info */}
          <div className="user-info">
            <div className="user-card">
              <div className="user-avatar">
                <span>AD</span>
              </div>
              <div className="user-details">
                <p className="user-name">Admin User</p>
                <p className="user-role">Super Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
    

        {/* Content */}
        <div className="content-area">
          {activeTab === "overview" && (
            <div className="overview-content">
              {/* Welcome Section */}
              <div className="welcome-section">
                <div className="welcome-content">
                  <div className="welcome-icon">
                    <Sparkles size={32} />
                  </div>
                  <div className="welcome-text">
                    <h2>Welcome back, Admin! 🎉</h2>
                    <p>Here's what's happening with your platform today.</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="stats-grid">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="stat-card">
                      <div className="stat-header">
                        <div className={`stat-icon ${stat.color}`}>
                          <Icon size={24} />
                        </div>
                        <span className="stat-change">{stat.change}</span>
                      </div>
                      <h3 className="stat-value">{stat.value}</h3>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="actions-grid">
                  <button className="action-btn blue">
                    <BookOpen size={24} />
                    <span>Add Training</span>
                  </button>
                  <button className="action-btn purple">
                    <Calendar size={24} />
                    <span>Create Event</span>
                  </button>
                  <button className="action-btn indigo">
                    <Users size={24} />
                    <span>Manage Users</span>
                  </button>
                </div>
              </div>
            </div>
          )}

              {activeTab === "trainings" && (
                <div >
                  <div className="content-header">
                    <BookOpen size={32} className="content-icon blue" />
                    <h2>Training Management</h2>
                  </div>
                  <TrainingForm />
                </div>
              )}


          {activeTab === "events" && (
            <div className="content-card">
              <div className="content-header">
                <Calendar size={32} className="content-icon purple" />
                <h2>Event Management</h2>
              </div>
              <EventForm/>
            </div>
          )}

          {activeTab === "users" && (
            <div className="content-card">
              <div className="content-header">
                <Users size={32} className="content-icon indigo" />
                <h2>User Management</h2>
              </div>
              <p className="content-description">View, edit, and assign roles to platform users.</p>
              <div className="coming-soon indigo">
                <p>User management interface coming soon! 👥</p>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="content-card">
              <div className="content-header">
                <Settings size={32} className="content-icon cyan" />
                <h2>Settings</h2>
              </div>
              <p className="content-description">Configure your account and system preferences.</p>
              <div className="coming-soon cyan">
                <p>Settings panel coming soon! ⚙️</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;