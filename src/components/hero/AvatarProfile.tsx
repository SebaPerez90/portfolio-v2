// import avatar_profile from '@/assets/avatar-profile.webp';
import avatar_profile from '@/assets/avatar-profile.webp';

const AvatarProfile = () => {
  return (
    <figure className="rounded-full z-40 overflow-hidden sm:h-[22em] sm:w-[22em] h-[10em] w-[10em]">
      <img src={avatar_profile} alt="avatar-profile-image" className="size-full object-cover" />
    </figure>
  );
};

export default AvatarProfile;
