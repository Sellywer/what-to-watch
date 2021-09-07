import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

import Header from '../header/header';

function PageNotFound() {

  return (
    <div>
      <Header />
      <div className="page_not_found container">
        <h1>Ooops... Page Not Found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;
