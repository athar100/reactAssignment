import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/" class="box">
          <h1>Discover Latest Courses</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}

        <a href="#/WishList">My Wishlist</a>
      </div>
    </header>
  );
}
