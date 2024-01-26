import RatingBlock from "components/common/RatingBlock/RatingBlock";

// import firstImageMobile1 from "../../images/pictures/contentSection/image1-1x@-428.jpg";
import firstImageMobile2 from "../../images/pictures/contentSection/image1-2x@-428.jpg";

import firstImageDesctop1 from "../../images/pictures/contentSection/image1-1x@-1464.jpg";
import firstImageDesctop2 from "../../images/pictures/contentSection/image1-2x@-1464.jpg";

// import secondImageMobile1 from "../../images/pictures/contentSection/image2-1x@-428.jpg";
import secondImageMobile2 from "../../images/pictures/contentSection/image2-2x@-428.jpg";

import secondImageDesctop1 from "../../images/pictures/contentSection/image2-1x@-1464.jpg";
import secondImageDesctop2 from "../../images/pictures/contentSection/image2-2x@-1464.jpg";

// import thirdImageMobile1 from "../../images/pictures/contentSection/image3-1x@-428.jpg";
import thirdImageMobile2 from "../../images/pictures/contentSection/image3-2x@-428.jpg";

import thirdImageDesctop1 from "../../images/pictures/contentSection/image3-1x@-1464.jpg";
import thirdImageDesctop2 from "../../images/pictures/contentSection/image3-2x@-1464.jpg";

// import fourthImageMobile1 from "../../images/pictures/contentSection/image4-1x@-428.jpg";
import fourthImageMobile2 from "../../images/pictures/contentSection/image4-2x@-428.jpg";

import fourthImageDesctop1 from "../../images/pictures/contentSection/image4-1x@-1464.jpg";
import fourthImageDesctop2 from "../../images/pictures/contentSection/image4-2x@-1464.jpg";

// import fifthImageMobile1 from "../../images/pictures/contentSection/image5-1x@-428.jpg";
import fifthImageMobile2 from "../../images/pictures/contentSection/image5-2x@-428.jpg";

import fifthImageDesctop1 from "../../images/pictures/contentSection/image5-1x@-1464.jpg";
import fifthImageDesctop2 from "../../images/pictures/contentSection/image5-2x@-1464.jpg";

// import sixthImageMobile1 from "../../images/pictures/contentSection/image6-1x@-428.jpg";
import sixthImageMobile2 from "../../images/pictures/contentSection/image6-2x@-428.jpg";

import sixthImageDesctop1 from "../../images/pictures/contentSection/image6-1x@-1464.jpg";
import sixthImageDesctop2 from "../../images/pictures/contentSection/image6-2x@-1464.jpg";

// import seventhImageMobile1 from "../../images/pictures/contentSection/image7-1x@-428.jpg";
import seventhImageMobile2 from "../../images/pictures/contentSection/image7-2x@-428.jpg";

import seventhImageDesctop1 from "../../images/pictures/contentSection/image7-1x@-1464.jpg";
import seventhImageDesctop2 from "../../images/pictures/contentSection/image7-2x@-1464.jpg";

// import eighthImageMobile1 from "../../images/pictures/contentSection/image8-1x@-428.jpg";
import eighthImageMobile2 from "../../images/pictures/contentSection/image8-2x@-428.jpg";

import eighthImageDesctop1 from "../../images/pictures/contentSection/image8-1x@-1464.jpg";
import eighthImageDesctop2 from "../../images/pictures/contentSection/image8-2x@-1464.jpg";

import StarList from "components/common/StarList/StarList";

import {
  Section,
  Title,
  Text,
  ListPhoto,
  ListPhotoItem,
  ListPhotoItemImage,
  CardList,
  CardListItem,
  CardListItemIcon,
  CardListItemMainText,
  CardListItemText,
  CardListAvatarWrapper,
  StarListNameWrapper,
} from "./ContentSection.styled";

export default function ContentSection() {
  return (
    <Section>
      <Title>What are our fans saying?</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </Text>
      <ListPhoto>
        {/* 1 */}
        <ListPhotoItem>
          <ListPhotoItemImage>
            <source
              srcSet={`${firstImageDesctop1} 1x, ${firstImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${firstImageDesctop1} 1x, ${firstImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={firstImageMobile2}
              loading="lazy"
              alt="Girl"
              width={"100px"}
            ></img>
          </ListPhotoItemImage>
        </ListPhotoItem>
        {/* 2*/}
        <ListPhotoItem>
          <ListPhotoItemImage>
            <source
              srcSet={`${secondImageDesctop1} 1x, ${secondImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${secondImageDesctop1} 1x, ${secondImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={secondImageMobile2}
              loading="lazy"
              alt="Girl"
              width={"100px"}
            ></img>
          </ListPhotoItemImage>
        </ListPhotoItem>
        {/* 3 */}
        <ListPhotoItem>
          <ListPhotoItemImage>
            <source
              srcSet={`${thirdImageDesctop1} 1x, ${thirdImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${thirdImageDesctop1} 1x, ${thirdImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={thirdImageMobile2}
              loading="lazy"
              alt="Girl"
              width={"100px"}
            ></img>
          </ListPhotoItemImage>
        </ListPhotoItem>

        {/* 4 */}
        <ListPhotoItem>
          <ListPhotoItemImage>
            <source
              srcSet={`${fourthImageDesctop1} 1x, ${fourthImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${fourthImageDesctop1} 1x, ${fourthImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={fourthImageMobile2}
              loading="lazy"
              alt="Girl"
              width={"100px"}
            ></img>
          </ListPhotoItemImage>
        </ListPhotoItem>
        {/* 5 */}
        <ListPhotoItem>
          <ListPhotoItemImage>
            <source
              srcSet={`${fifthImageDesctop1} 1x, ${fifthImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${fifthImageDesctop1} 1x, ${fifthImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={fifthImageMobile2}
              loading="lazy"
              alt="Girl"
              width={"100px"}
            ></img>
          </ListPhotoItemImage>
        </ListPhotoItem>
        {/* 6 */}
        <ListPhotoItem>
          <ListPhotoItemImage>
            <source
              srcSet={`${sixthImageDesctop1} 1x, ${sixthImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${sixthImageDesctop1} 1x, ${sixthImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={sixthImageMobile2}
              loading="lazy"
              alt="Girl"
              width={"100px"}
            ></img>
          </ListPhotoItemImage>
        </ListPhotoItem>
        {/* 7 */}
        <ListPhotoItem>
          <ListPhotoItemImage>
            <source
              srcSet={`${seventhImageDesctop1} 1x, ${seventhImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${seventhImageDesctop1} 1x, ${seventhImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={seventhImageMobile2}
              loading="lazy"
              alt="Girl"
              width={"100px"}
            ></img>
          </ListPhotoItemImage>
        </ListPhotoItem>
        {/* 8 */}
        <ListPhotoItem>
          <ListPhotoItemImage>
            <source
              srcSet={`${eighthImageDesctop1} 1x, ${eighthImageDesctop2} 2x`}
              media="(min-width:1464px)"
            />
            <source
              srcSet={`${eighthImageDesctop1} 1x, ${eighthImageDesctop2} 2x`}
              media="(min-width:428px)"
            />
            <img
              src={eighthImageMobile2}
              loading="lazy"
              alt="Girl"
              width={"100px"}
            ></img>
          </ListPhotoItemImage>
        </ListPhotoItem>
      </ListPhoto>

      <CardList>
        <CardListItem>
          <CardListAvatarWrapper>
            <CardListItemIcon></CardListItemIcon>
            <StarListNameWrapper>
              <StarList />
              <CardListItemMainText>Jane, S.</CardListItemMainText>
            </StarListNameWrapper>
          </CardListAvatarWrapper>
          <CardListItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget
            aliquet mi.
          </CardListItemText>
        </CardListItem>

        <CardListItem>
          <CardListAvatarWrapper>
            <CardListItemIcon></CardListItemIcon>
            <StarListNameWrapper>
              <StarList />
              <CardListItemMainText>Jane, S.</CardListItemMainText>
            </StarListNameWrapper>
          </CardListAvatarWrapper>
          <CardListItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget
            aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales.
          </CardListItemText>
        </CardListItem>

        <CardListItem>
          <CardListAvatarWrapper>
            <CardListItemIcon></CardListItemIcon>
            <StarListNameWrapper>
              <StarList />
              <CardListItemMainText>Jane, S.</CardListItemMainText>
            </StarListNameWrapper>
          </CardListAvatarWrapper>
          <CardListItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget
            aliquet mi.
          </CardListItemText>
        </CardListItem>
      </CardList>
      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
    </Section>
  );
}
