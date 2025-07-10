import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import contactMessage from './contactMessage'

export const schema = {
  types: [post, author, category, blockContent, contactMessage], // contactMessage eklendi
}
