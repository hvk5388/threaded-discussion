/* eslint-disable eqeqeq */
/* eslint-disable class-methods-use-this */
// dependencies / things imported
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import 'jwt-auth-component';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
 import '@lrnwebcomponents/rpg-character/rpg-character.js';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement

// which has the magic life-cycles and developer experience below added
export class DaPenguinsComment extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'da-penguins-comment';
  }

  // CSS - specific to Lit
  static get styles() {
    return [...super.styles ,
    css`
      :host {
          display: block;
          border: 1px solid var(--simple-colors-default-theme-accent-6);
          min-width: 1375px;
          min-height: 155px;
          border-radius: 20px;
          padding: 20px;
          width: 5em;
          background-color: var(--simple-colors-default-theme-accent-2);
          box-shadow: 0 0 5px var(--simple-colors-default-theme-accent-7);
         
          /* font info */
          font-family: 'Open Sans', sans-serif;
          color: black;
      }

      .post-main {
        background-color: var(--simple-colors-default-theme-accent-2);
        box-shadow: 0 0 5px var(--simple-colors-default-theme-accent-7);
        border: solid 1px var(--simple-colors-default-theme-accent-3);
        border-radius: 19px 19px 19px 19px;
        margin-bottom: 15px;
        margin-left: 15px;
        margin-top: 15px;
        height: 99%;
        width: 1350px;
      }

      .post-title {
        display: flex;
        background-color: var(--simple-colors-default-theme-accent-3);
        border: solid 10px var(--simple-colors-default-theme-accent-2);
        border-radius: 19px;
        margin-left: 15px;
        margin-top: 15px;
        padding-top: 15px;
        padding-bottom: 15px;
        width: 1300px;
      }

      .post-body {
        background-color: var(--simple-colors-default-theme-accent-3);
        border: solid 10px var(--simple-colors-default-theme-accent-2);
        border-radius: 19px;
        margin-top: 15px;
        margin-left: 15px;
        margin-bottom: 15px;
        height: 215px;
        width: 1300px;
        font-size: 14px;
      }

      .post-body-content {
        border: solid 1px transparent;
        border-radius: 19px;
        background-color: transparent;
        resize: none;
        outline: none;
        height: 215px;
        width: 1300px;
        font-family: 'Open Sans', sans-serif;
        color: black;
        padding: 10px;
      }

      .profile-pic {
        display: inline-flex;
        background-color: var(--simple-colors-default-theme-accent-7);
        border-radius: 50px;
        margin-left: 15px;
        height: 75px;
        width: 75px;
        vertical-align: center;
      }

      .title-content {
        display: block;
        margin-left: 15px;
        width: 1175px;
      }

      .header{
        display: block;
        margin-left: 15px;
        height: auto;
        width: 97%;
      }

      .username {
        display: block;
        margin-left: 15px;
        margin-top: 10px;
        height: auto;
        width: 40%;
      } 

/* 
      simple-icon-lite {
        --simple-icon-height: 100px;
        --simple-icon-width: 100px;
        color: white;
        transform: translate(-50%, -190%);
        top: 50%;
        left: 50%;
        z-index: 100;
      } */

      .edit-post-body{
        box-shadow: 0px 0px 5px #0EBD60;
        background-color: var(--simple-colors-default-theme-accent-4);
               
      }

      .edit-post-blur > *:not(.edit-post-body,.edit-options-visible){
        filter: blur(2px);
      }

      .comment-button {
        background-color: #CAD1C9;
        color: #184C34;
        text-align: center;
        border: none;
        border-radius: 10px;
        padding: 10px 15px;
        margin: 4px 2px;
        cursor: pointer;
      }

      .submit-button:disabled {
        background-color: lightgrey !important;
        color: darkgrey !important;
        pointer-events: none;
      }

      .submit-button {
        background-color: #184C34;
        color: #EFF4ED;
      }

      .comment-button:hover,
      .comment-button:focus,
      .comment-button:active {
        box-shadow: 0px 0px 2px #0EBD60;
      }

      .edit-options-hidden {
        visibility: hidden;
        height: 0px;
      }

      .edit-options-visible {
        visibility: visible;
        padding: 10px;
        margin: 10px;
        width: fit-content;
        border-radius: 5px;
      }

      .reply-pane-hidden {
        visibility: hidden;
        height: 0px;
      }

      .reply-pane-visible {
        visibility: visible;
        background-color: var(--simple-colors-default-theme-accent-2);
        box-shadow: 0 0 5px var(--simple-colors-default-theme-accent-7);
        border-radius: 19px;
        height: 200px;
        width: 1210px;
        padding: 20px;
        margin: 20px 20px 20px 75px;
        font-family: "Open Sans", sans-serif;
      }

      .reply-prompt {
        margin: 0px;
        color: #184C34;
      }

      .reply-body {
        border: solid 1px #184C34;
        border-radius: 5px;
        background-color: whitesmoke;
        resize: none;
        outline: none;
        width: 1186px;
        height: 89px;
        font-family: 'Open Sans', sans-serif;
        color: #184C34;
        padding: 10px;
        margin: 15px 0px;
      }

      .rpg {
        display: block;
      }

    `];
  }

  // overlay on div tag - wrap image in div & style div
  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.imgSrc = '';
    this.imgKeyword = 'grey box';
    this.status = 'pending';
    this.answerIcon = false;
    this.icon = '';
    this.threadPermissions = null;

    // Gets the ID NEEDED FOR GETTING COMMENTS
    this.threadID = null;

    this.UID = null;
    this.userUID = null;
    this.submittedTime = null;
    this.body = null;
    this.editedTime = null;
    this.isEdited = false;
    this.isReply = false;
    this.replyTo = null;
    this.likes = 0;
   
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      ...super.properties,
      imgSrc: { type: String, reflect: true, attribute: 'img-src' },
      imgKeyword: { type: String, attribute: 'img-keyword' },
      status: { type: String, reflect: true }, // Correct, incorrect, pending
      answerIcon: { type: Boolean, reflect: true },
      icon: { type: String },
      threadPermissions: { type: String },
      threadID: { type: String },

      UID: { type: String },
      userUID: { type: String },
      username: {type: String },
      submittedTime: { type: String },
      body: { type: String },
      editedTime: { type: String },
      isEdited: { type: Boolean },
      isReply: { type: Boolean },
      replyTo: { type: String },
      likes: { type: String }
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'status' && this[propName] === 'correct') {
        this.answerIcon = true;
        this.icon = 'check';
      }
      if (propName === 'status' && this[propName] === 'incorrect') {
        this.answerIcon = true;
        this.icon = 'cancel';
      }
      if (propName === 'status' && this[propName] === 'pending') {
        this.answerIcon = false;
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
    if (this.threadPermissions == null){
      this.fetchThreadData();
    }
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  async fetchThreadData() {
    // throwing error bc not in db
    const apiOrigin = window.location.origin;
    const apiURL = new URL ("/api/get-thread/", apiOrigin);
    apiURL.searchParams.append("uid", this.threadID);
    await fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      this.threadPermissions = data.permissions;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async createComment(commentBody){
    const response = await fetch('/api/submit-comment', {
      method: 'POST',
      headers: { Authorization: `Bearer ${window.localStorage.getItem('comment-jwt')}` },
      body: JSON.stringify({
        thread_uid: this.threadID,
        body: commentBody,
        is_reply: false
     })
    }).then(res => res.json());
    console.log(response);
    return response;
  }

  async createReply(replyBody){
    const response = await fetch('/api/submit-comment', {
      method: 'POST',
      headers: { Authorization: `Bearer ${window.localStorage.getItem('comment-jwt')}` },
      body: JSON.stringify({
        thread_uid: this.threadID,
        body: replyBody,
        is_reply: true,
        reply_to: this.UID
        
     })
    }).then(res => res.json());
    
    console.log(response);
    console.log("specific comment: ");
    console.log(await this.getAllComments());
    return response;
  }

  async getAllComments() {
    // TODO: make query into URL object
    const response = await fetch(`/api/get-comment?threadId=${this.threadID}`, {headers: {
      Authorization: `Bearer ${window.localStorage.getItem('comment-jwt')}`
    }}).then(res => res.json());
    console.log(response);
    return response;
  }

  // TODO: Maybe use for chaining replies to a comment? (can be thru comment.js or thread.js)

  // eslint-disable-next-line class-methods-use-this
  async getSpecificComment(targetUID){
    const response = await fetch(`/api/get-comment?uid=${targetUID}`, {headers: {
      Authorization: `Bearer ${window.localStorage.getItem('comment-jwt')}`
    }}).then(res => res.json());
    console.log(response);
  }

  async likeComment(){
    // 07e76fec-9f18-4b94-b464-df930de006a1
    const response = await fetch(`/api/like-comment?uid=${this.UID}`, {headers: {
      Authorization: `Bearer ${window.localStorage.getItem('comment-jwt')}`
    }}).then(res => res.json());
    console.log(response);
  }

  async deleteComment(){
    const response = await fetch(`/api/delete-comment?uid=${this.UID}`, {headers: {
      Authorization: `Bearer ${window.localStorage.getItem('comment-jwt')}`
    }}).then(res => res.json());
    console.log(response);
  }

  async editComment(newBody){
    const response = await fetch('/api/edit-comment', {
      method: 'PUT',
      headers: { Authorization: `Bearer ${window.localStorage.getItem('comment-jwt')}` },
      body: JSON.stringify({
        uid: this.UID,
        body: newBody
     })
    }).then(res => res.json());
    console.log(response);
  }


  showEditingPane(){
    this.shadowRoot.querySelector('.post-body-content').readOnly = false;
   
    this.shadowRoot.querySelector('.edit-options-hidden').classList.add('edit-options-visible');
    this.shadowRoot.querySelector('.edit-options-visible').classList.remove('edit-options-hidden');

    this.shadowRoot.querySelector('.post-body').classList.add('edit-post-body');
    this.shadowRoot.querySelector('.post-main').classList.add('edit-post-blur');
  }

  hideEditingPane(){
    this.shadowRoot.querySelector('.post-body-content').readOnly = true;

    this.shadowRoot.querySelector('.edit-options-visible').classList.add('edit-options-hidden');
    this.shadowRoot.querySelector('.edit-options-hidden').classList.remove('edit-options-visible');

    this.shadowRoot.querySelector('.post-body').classList.remove('edit-post-body');
    this.shadowRoot.querySelector('.post-main').classList.remove('edit-post-blur');
  }

  cancelEdit(){
    this.hideEditingPane();
    this.shadowRoot.querySelector('.post-body-content').value = this.body;
    this.validateEditButton();
  }

  submitEdit(){
    const newBody = this.shadowRoot.querySelector('.post-body-content').value.trim();
    if(newBody != ""){
      this.body = newBody;
      this.editComment(newBody);
      this.hideEditingPane();
    }
    this.getSpecificComment(this.UID);
  }

  validateEditButton(){
    const submitButton = this.shadowRoot.querySelector("#submit-edit");
    const commentBody = this.shadowRoot.querySelector(".post-body-content");
    if (commentBody.value.trim() == ''){
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  }

  showReplyPane(){
    this.shadowRoot.querySelector('.reply-pane-hidden').classList.add('reply-pane-visible');
    this.shadowRoot.querySelector('.reply-pane-visible').classList.remove('reply-pane-hidden');

  }

  hideReplyPane(){
    this.shadowRoot.querySelector('.reply-pane-visible').classList.add('reply-pane-hidden');
    this.shadowRoot.querySelector('.reply-pane-hidden').classList.remove('reply-pane-visible');
  }

  cancelReply(){
    this.hideReplyPane();
    this.shadowRoot.querySelector('.reply-body').value = "";
    this.validateReplyButton();
  }

  initiateCreateReply(){
    const replyBody = this.shadowRoot.querySelector('.reply-body').value.trim();
    if(replyBody != ""){
      // this.createReply(replyBody);
      console.log("Where reply submission would occur");
      this.hideReplyPane();
    }
    console.log(`reply: ${replyBody}`);
    this.shadowRoot.querySelector('.reply-body').value = "";
  }

  validateReplyButton(){
    const replyButton = this.shadowRoot.querySelector("#submit-reply");
    const replyBody = this.shadowRoot.querySelector(".reply-body");
    if (replyBody.value.trim() == ''){
      replyButton.disabled = true;
    } else {
      replyButton.disabled = false;
    }
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div id="Nest">
        <div class="post-main">
          <div class="post-title">
            <div class="profile-pic">
              <!-- <rpg-character class="rpg" seed="test" width="60" height="60" ></rpg-character> -->
            </div>
            <div class="title-content">
              <div class="header">
                <h1>${this.username ? this.username : 'Anonymous'}</h1>
                <h2>${this.UID}</h2>
              </div>
              <div class="username">
                <simple-icon-lite icon="favorite"></simple-icon-lite>
                <p>${this.likes}</p>
                <p>${this.submittedTime}</p>
                ${this.isEdited ? html`<p>edited: ${this.editedTime}</p>` : ''}
              </div>
            </div>
          </div>
          <div class="post-body">
            <textarea class="post-body-content" readonly @input=${this.validateEditButton} > ${this.body}</textarea >
          </div>
          <div class="edit-options-hidden">
            <button class="comment-button" @click=${this.cancelEdit}>
              Cancel
            </button>
            <button id="submit-edit" class="comment-button submit-button" @click=${this.submitEdit} disabled > Submit </button>
          </div>
        </div>
        <div class="reply-pane-hidden">
          <p class="reply-prompt">Add a reply:</p>
          <textarea class="reply-body" @input=${this.validateReplyButton} placeholder="What do you think?" ></textarea>
          <div class="reply-pane-buttons">
            <button class="comment-button" @click=${this.cancelReply}>Cancel</button>
            <button id="submit-reply" class="comment-button submit-button" @click="${this.initiateCreateReply}" disabled> Reply</button>
          </div>
        </div>
        <div class="comment-buttons">
          <button @click=${this.likeComment}>Like Comment</button>
          <button @click=${this.deleteComment}>Delete Comment</button>
          <button @click=${this.showEditingPane}>Edit Comment</button>
          <button @click=${this.showReplyPane}>replyComment</button>
        </div>
      </div>
    `;  
  }



  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/FlashCard.haxProperties.json`, import.meta.url).href;
  }
}
customElements.define(DaPenguinsComment.tag, DaPenguinsComment);