import RatingBlock from "components/common/RatingBlock/RatingBlock";

import {
  Section,
  Title,
  Text,
  ListPhoto,
  ListPhotoItem,
  ListPhotoItemImage,
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
        <ListPhotoItem>
          <ListPhotoItemImage
            src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
            alt="Description"
          ></ListPhotoItemImage>
        </ListPhotoItem>
        <ListPhotoItem>
          <ListPhotoItemImage
            src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
            alt="Description"
          ></ListPhotoItemImage>
        </ListPhotoItem>
        <ListPhotoItem>
          <ListPhotoItemImage
            src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
            alt="Description"
          ></ListPhotoItemImage>
        </ListPhotoItem>
        <ListPhotoItem>
          <ListPhotoItemImage
            src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
            alt="Description"
          ></ListPhotoItemImage>
        </ListPhotoItem>
        <ListPhotoItem>
          <ListPhotoItemImage
            src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
            alt="Description"
          ></ListPhotoItemImage>
        </ListPhotoItem>
        <ListPhotoItem>
          <ListPhotoItemImage
            src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
            alt="Description"
          ></ListPhotoItemImage>
        </ListPhotoItem>
        <ListPhotoItem>
          <ListPhotoItemImage
            src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
            alt="Description"
          ></ListPhotoItemImage>
        </ListPhotoItem>
        <ListPhotoItem>
          <ListPhotoItemImage
            src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg"
            alt="Description"
          ></ListPhotoItemImage>
        </ListPhotoItem>
      </ListPhoto>
      <p>SLIDE</p>
      <p>PAGINATION</p>
      <RatingBlock test={"Over 500+ 5 Star Reviews Online"} />
    </Section>
  );
}
