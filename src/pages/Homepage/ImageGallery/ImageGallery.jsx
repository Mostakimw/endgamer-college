import SectionTitle from "../../../components/SectionTitle";

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      imageUrl:
        "https://www.collegetransitions.com/wp-content/uploads/2014/05/shutterstock_789412672-1200x675.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://www.pewresearch.org/wp-content/uploads/2022/04/FT_22.03.29_CollegeGradFacts__feature.jpg?w=640",
    },
    {
      id: 3,
      imageUrl:
        "https://www.athens.edu/wp-content/uploads/2023/04/IMG_4251-scaled-e1681739733424.jpg",
    },
    {
      id: 4,
      imageUrl:
        "https://www.dominican.edu/sites/default/files/styles/width_1160/public/2020-02/graduation-registrar-hero.jpg?itok=l3Th9Xa8",
    },
    {
      id: 5,
      imageUrl:
        "https://www.vsu.edu/files/images/heroes/graduation_male_cap_gown_hero.jpg",
    },
    {
      id: 6,
      imageUrl:
        "https://www.bankrate.com/2022/05/09185151/2022-college-graduation-statistics.jpg",
    },
    {
      id: 7,
      imageUrl:
        "https://media.istockphoto.com/id/1151567114/photo/a-young-female-graduate-against-the-background-of-university-graduates.jpg?s=612x612&w=0&k=20&c=zAFyR9UEbOWLOXqdNQSItVxVxOrjhOvwkfms-TyigA4=",
    },
    {
      id: 8,
      imageUrl:
        "https://di-uploads-pod5.s3.amazonaws.com/beachautomotivegroup/uploads/2016/03/graduates.jpg",
    },
    {
      id: 9,
      imageUrl:
        "https://unity.edu/wp-content/uploads/2020/05/graduates-2015_0.jpg",
    },
  ];

  return (
    <div className="mt-12">
      <SectionTitle title="Featured Image" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.imageUrl}
              alt={`Image ${image.id}`}
              className="w-full h-72 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
