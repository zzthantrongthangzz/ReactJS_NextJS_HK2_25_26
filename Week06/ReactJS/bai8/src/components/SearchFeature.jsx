import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults, clearResults } from '../store/searchSlice';

export default function SearchFeature() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector((state) => state.search);

  useEffect(() => {
    if (!searchTerm.trim()) {
      dispatch(clearResults());
      return;
    }

    const timerId = setTimeout(() => {
      dispatch(fetchSearchResults(searchTerm));
    }, 500);


    return () => clearTimeout(timerId);
    
  }, [searchTerm, dispatch]); 

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Product Search (Debounce)</h2>
      
      <input
        type="text"
        placeholder="Type to search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '15px' }}
      />

      {loading && <p style={{ color: '#0d6efd' }}>⏳ Searching...</p>}
      {error && <p style={{ color: 'red' }}>❌ Error: {error}</p>}

      {!loading && !error && results.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, border: '1px solid #ddd', borderRadius: '4px' }}>
          {results.map((item) => (
            <li key={item.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
              <strong>{item.title}</strong> - ${item.price}
            </li>
          ))}
        </ul>
      )}

      {!loading && searchTerm && results.length === 0 && (
        <p style={{ color: '#666' }}>No products found for "{searchTerm}".</p>
      )}
    </div>
  );
}