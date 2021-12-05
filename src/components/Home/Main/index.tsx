import { 
  PhotoIcon, 
  EventIcon, 
  VideoIcon, 
  ArticleIcon, 
  UserIcon,
  Elipsis,
  LikeIcon,
  Comment,
  Share,
  SendPost
} from "../../assets"


import { Article, Description, MainContainer, Reactions, ShareBox, SharedActor, SharedImg } from "./Main.styles"


export const Main = () => {
  return (
    <MainContainer>
      <ShareBox>
        <div>
            <UserIcon />
            <button>Start a post</button>
        </div>

        <div>
            <button>
              <PhotoIcon />
              <span>Photo</span>
            </button>

            <button>
              <VideoIcon/>
              <span>Video</span>
            </button>

            <button>
              <EventIcon />
              <span>Video</span>
            </button>

            <button>
              <ArticleIcon />
              <span>Write article</span>
            </button>

        </div>
      </ShareBox>
      <div>
          <Article>
            <SharedActor>
              <a>
                  <UserIcon />
                  <div>
                      <span>Title</span>
                      <span>Info</span>
                      <span>Date</span>
                  </div>
              </a>
            <button>
              <Elipsis />
            </button>
            </SharedActor>
            <Description>Description</Description>
            <SharedImg>
              <a>
                <img src='/images/shared-image.png' />
              </a>
            </SharedImg>
            <Reactions>
              <button>
                <LikeIcon />
                <span>Like</span>
              </button>
              <button>
                <Comment />
                <span>Comment</span>
              </button>
              <button>
                <Share />
                <span>Share</span>
              </button>
              <button>
                <SendPost />
                <span>Send</span>
              </button>
            </Reactions>
          </Article>
      </div>
    </MainContainer>
  )
}

