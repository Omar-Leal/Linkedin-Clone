import { 
  PhotoIcon, 
  EventIcon, 
  VideoIcon, 
  ArticleIcon, 
  UserIcon 
} from "../../assets"
import { MainContainer, ShareBox } from "./Main.styles"


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
    </MainContainer>
  )
}

