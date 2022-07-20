import { Component } from "react";
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';

export class Searchbar extends Component {
  state = {
    imagesName: '',
  };
  static propTypes = {
    onSubmit:PropTypes.func.isRequired
  }

  handleChange = evt => {
    this.setState({ imagesName: evt.currentTarget.value })
    // console.log(evt.currentTarget.value)
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.imagesName.trim() === '') {
      alert('Please enter something')
      return;
    }
    this.props.onSubmit(this.state.imagesName)
    this.setState({imagesName:''})
    // console.log(this.state.imagesName)
  }

  render() {
    const { imagesName } = this.state;

        return <header onSubmit={this.handleSubmit} className={css.searchbar}>
          <form className={css.form} >
            <button type="submit"  className={css.button}>
              <span className={css.buttonLabel}><BsSearch/></span>
            </button>

            <input
                onChange={this.handleChange}
                className={css.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={imagesName}
            />
          </form>
</header>
    }
    
}