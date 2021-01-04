import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const EmailSubscriptionComponent = class extends React.Component {
    constructor() {
        super()
        this.state = { email: "", result: null }
      }
    _handleSubmit = async e => {
      e.preventDefault()
      const result = await addToMailchimp(this.state.email)
      this.setState({result: result.result})
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
                <h2 className="label">Subscribe to get updates on new posts!</h2>
                <div>
                    <input
                    className="input"
                    id="email-entry"
                    placeholder="Email address"
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    />
                    <button className="button button-margin-top" type="submit">Subscribe</button>
                </div>
            </form>
        )
    }
  }

export default EmailSubscriptionComponent