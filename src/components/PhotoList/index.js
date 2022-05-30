import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Run Buddy",
      category: "work",
      description: "An application where a user can locate a fitness instructor for one on one mentoring. GitHib Repo: https://github.com/loganpalmer95/run-buddy. See deployed app here: https://loganpalmer95.github.io/run-buddy/."
    },
    {
      name: "Open Source Kanban",
      category: "work",
      description: "This is a web app that allows developers bring new thoughts and ideas to the world. You are able to log in and register and then post content, delete content, reply to someone else's post and then edit or delete those responses. GitHub Repo: https://github.com/AdrianHenry15/Open-Source-Kanban. See deployed app here: https://oskdb.herokuapp.com/" 
    },
    {
      name: "Food Finder",
      category: "work",
      description: "This is a web app that allows users to enter a city name and show them the Google Weather API and local restaurants within a 5 mile radius. GitHub Repo: https://github.com/loganpalmer95/group-project. See deployed web app here: https://loganpalmer95.github.io/group-project/"
    },
    {
      name: "BookSpace",
      category: "work",
      description: "An open-source book club for the modern age. This app allows users to login or signup and talk with other users about books they have read and ones they want to read. GitHub Repo: https://github.com/LF56/BookSpace. See deployed web app here: https://book-space-app.herokuapp.com/signup"
    },
    {
      name: "LinkedIn",
      category: "links",
      description: "Find my LinkedIn profile here: https://www.linkedin.com/in/loganpalmer95/."
    },
    {
      name: "GitHub",
      category: "links",
      description: "Find my GitHub Repo here: https://github.com/loganpalmer95/."
    },
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
