import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types';
class CreateUserForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            Image: ''

        };
    }
   

    onSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    onFieldChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { firstName, } = this.state
        return (
                    <div>
                        <form >
                            <div >
                                <label htmlFor='searchFirstName'>FirstName: </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='firstName'
                                    name='firstName'
                                    value={firstName}
                                    onChange={this.onFieldChange}
                                    placeholder='Enter firstName' />{' '}
                            </div>
                            <button
                                type="submit"
                                onClick={this.onSubmit}> Submit   </button>
                        </form>
                    </div>

        )
    }
}
export default CreateUserForm