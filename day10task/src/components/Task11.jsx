import React, { useState } from 'react';

const Task11 = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      if (data.message) {
        alert('User not found');
        setProfile(null);
      } else {
        setProfile(data);
      }
    } catch (error) {
      alert('Error fetching profile');
    }
  };

  return (
    <div className="task">
      <h2>Task11: GitHub Profile Viewer</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={getProfile}>Search</button>
      {profile && (
        <div>
          <img src={profile.avatar_url} alt="avatar" width="100" />
          <h3>{profile.name}</h3>
          <p>{profile.bio}</p>
          <p>Followers: {profile.followers}</p>
          <p>Repos: {profile.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default Task11;
