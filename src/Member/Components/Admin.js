import React, { useState } from 'react';
import AdminNav from './AdminNav';
import TabSelector from './TabSelector';
import SearchBar from './SearchBar';
import ItemCard from './ItemCard';
import AddItemModal from './AddItemModal';
import { useItems } from '../hooks/useItems';
import './Admin.css';

function Admin() {
  const { items, handleStatusChange, handleAddItem } = useItems();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('found');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(
    (item) =>
      (activeTab === 'pending'
        ? item.status === 'pending'
        : item.type === activeTab) &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="admin-container">
      
      <AdminNav />

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Tab Selector */}
          <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Search Bar */}
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          {/* Items Grid */}
          <div className="item-grid">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Add Item Modal */}
      {isModalOpen && (
        <AddItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddItem}
          type={activeTab}
        />
      )}
    </div>
  );
}

export default Admin;
