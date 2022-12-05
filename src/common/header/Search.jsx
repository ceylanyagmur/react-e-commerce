import React from "react"

import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width ' style={{color:"red",fontSize:"20px"}}>
          <Link to='/'> Ceylan AVM <i class='fa-solid fa-truck-fast'></i></Link>
         
          </div>

         <div className="register">
         <li>
                <Link to='/register'>Register</Link>
              </li>
             {/*  <li>
                <Link to='/login'>login</Link>
              </li>
          */}
         </div>

          <div className='icon f_flex width'>
            {/*sepet simgemi ve aktivasyonunu oluşturdum */}
            
            <div className='cart'>
            
              
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
