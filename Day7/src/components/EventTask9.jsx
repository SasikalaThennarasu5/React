function EventTask9() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submission prevented!");
  };

  return (
    <div>
      <h2>Task 9: Prevent Default</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventTask9;
