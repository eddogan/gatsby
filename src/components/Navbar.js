import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
          allWordpressWpApiMenusMenusItems{
		    edges{
		      node{
		        items{
		          title
		          url
		          object_slug
		        }
		      }
		    }
		  }
      }
    `}
    render={data => (
      <nav className="navbar ai_center jc_between">
          <div className="navbar--brand">
            <Link to="/">
              <figure className="image">
                <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
              </figure>
            </Link>
          </div>
          <div className="navbar--menu">
            {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
              <Link
                className="navbar--menu--item"
                to={item.url}
                key={item.object_slug}
              >
                {item.title}
              </Link>
            ))}
          </div>
      </nav>
    )}
  />
)

export default Navbar
