import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareCount,
} from 'react-share'
import Sticky from 'react-stickky'
import style from './SharePost.module.scss'

const socialSharing = ({ url, size, round }) => (
  <aside className={style.share}>
    <Sticky className={style.stickySocial}>
      <EmailShareButton url={url}>
        <EmailIcon size={size} round={round} />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <FacebookShareCount url={url} />
        <FacebookIcon size={size} round={round} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={size} round={round} />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={size} round={round} />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={size} round={round} />
      </WhatsappShareButton>
    </Sticky>
  </aside>
)

export { socialSharing as default }
