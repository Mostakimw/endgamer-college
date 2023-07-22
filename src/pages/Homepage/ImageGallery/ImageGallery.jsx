const ImageGallery = () => {
  const images = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
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
  );
};

export default ImageGallery;
