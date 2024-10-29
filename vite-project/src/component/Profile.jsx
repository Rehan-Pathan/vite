
import PropTypes from 'prop-types';

function Profile({ name, title, bio, imgSrc, bgColor }) {
  return (
    <div className={`${bgColor} p-4 md:p-6  rounded-lg shadow-lg max-w-xs`}>
      <img className="rounded-full w-24 h-24 mx-auto" src={imgSrc} alt={`${name}'s profile`} />
      <h2 className="text-xl md:text-2xl font-semibold text-center mt-4">{name}</h2>
      <p className="text-gray-600 text-center text-xl md:text-2xl">{title}</p>
      <p className="text-gray-700 text-center mt-2 ">{bio}</p>
    </div>
  );
}




export default Profile;
