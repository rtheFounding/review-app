export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
        <label>
          <div>Your email:</div>
          <input type="email" name="email" required />
        </label>
        <label>
          <div>Your message:</div>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
