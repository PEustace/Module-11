import { createContext, useState } from "react";

export const BookmarksContext = createContext({
  ids: [],
  addBookmark: (id) => {},
  removeBookmark: (id) => {},
});

function BookmarksContextProvider({ children }) {
  const [bookmarkedNewsIds, setBookmarkedNewsIds] = useState([]);

  function addBookmark(id) {
    setBookmarkedNewsIds((currentIds) => [...currentIds, id]);
  }

  function removeBookmark(id) {
    setBookmarkedNewsIds((currentIds) =>
      currentIds.filter((newsId) => newsId !== id)
    );
  }

  const value = {
    ids: bookmarkedNewsIds,
    addBookmark: addBookmark,
    removeBookmark: removeBookmark,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;
