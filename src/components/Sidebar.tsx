import { Nav } from 'react-bootstrap';

type SidebarProps = {
  activeCategory: string;
  onCategorySelect: (category: string) => void;
};

const CATEGORIES = [
  { id: 'All Recipes', label: 'All Recipes', isImage: true },
  { id: 'Favorites', label: '⭐ Favorites' },
  { id: 'Breakfast', label: '☀ Breakfast' },
  { id: 'Lunch', label: '🍔 Lunch' },
  { id: 'Dinner', label: '🍗 Dinner' },
  { id: 'Pizza', label: '🍕 Pizza' },
  { id: 'Desserts', label: '🍰 Desserts' },
];

const Sidebar = ({ activeCategory, onCategorySelect }: SidebarProps) => {
  return (
    <Nav variant='pills' className='flex-column gap-3'>
      {CATEGORIES.map((cat) => (
        <Nav.Item
          key={cat.id}
          className='d-flex justify-content-center align-items-center text-center glass-card sidebar-card fw-bold cursor-pointer'
          onClick={() => onCategorySelect(cat.id)}
          style={{ opacity: activeCategory === cat.id ? 1 : 0.6, cursor: 'pointer' }}
        >
          {cat.isImage ? (
            <>
              <img src='/all-recipes.svg' alt='All recipes' className='icon mx-2' />
              {cat.label}
            </>
          ) : (
            cat.label
          )}
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Sidebar;
