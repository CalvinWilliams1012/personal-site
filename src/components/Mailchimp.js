import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const EmailSubscriptionComponent = class extends React.Component {
    constructor() {
        super()
        this.state = { email: "", result: null }
      }
    _handleSubmit = async e => {
      e.preventDefault()
      const result = await addToMailchimp(this.state.email)
      this.setState({result: result})
    }
    
    handleChange = event => {
        this.setState({ email: event.target.value })
    }
    
    render () {
        return this.state.result === "success" ? (
            <div>Success!</div>
        ) : this.state.result === "error" ?(
            <div>Error :(</div>
        ) : (
            <form onSubmit={this._handleSubmit}>
                <h2>Subscribe to my email list!</h2>
                <div>
                    <input
                    id="email-entry"
                    placeholder="Email address"
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    />
                    <button type="submit">Subscribe</button>
                </div>
            </form>
        )
    }
  }

export default EmailSubscriptionComponent