import React from 'react'
import { Link } from 'gatsby'
import Mailchimp from '../../components/Mailchimp'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'


const SubscribePage = () => (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <Link to={closeTo}>
              Close
            </Link>
          ) : (
            <header>
              <h1>
                Website Title
              </h1>
            </header>
          )}
            <Mailchimp/>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  )
  
  export default SubscribePage
  