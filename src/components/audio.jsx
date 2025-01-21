
import birthdaySong from '../assets/audio/bint_rahman1_7081567251110890758.mp3'

export default function Audio(info) {
  const {title} = info
 
  return (
    <div>
      <audio ref={title} loop autoPlay>
        <source src={birthdaySong} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    
    </div>
  );
}
