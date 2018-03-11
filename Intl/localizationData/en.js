export default {
  locale: 'en',
  messages: {
    siteTitle: 'OneLess ... Hungry Person',
    addPost: 'Post Food',
    switchLanguage: 'Switch Language',
    twitterMessage: 'We are on Twitter',
    by: '@',
    deletePost: 'Delete Post',
    createNewPost: 'Create new post',
    authorName: 'Location',
    postTitle: 'Food',
    postContent: 'Comment',
    submit: 'Submit',
    comment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	}`,
    HTMLComment: `user <b style='font-weight: bold'>{name} </b> {value, plural,
    	  =0 {does not have <i style='font-style: italic'>any</i> comments}
    	  =1 {has <i style='font-style: italic'>#</i> comment}
    	  other {has <i style='font-style: italic'>#</i> comments}
    	}`,
    nestedDateComment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	} as of {date}`,
  },
};
