import Avatar from "../components/Avatar";

function App() {
  const simpsonList = [
    {
      firstName: "Bart",
      lastName: "Simpson",
      img: "https://www.lessimpson.fr/wp-content/uploads/bart-simpson.webp",
    },

    {
      firstName: "Homer",
      lastName: "Simpson",
      img: "https://img.icons8.com/plasticine/512/homer-simpson.png",
    },
  ];

  return (
    <div className="App">
      {simpsonList.map((person) => {
        // personne correspond au nom de chacun des objects du tableau. (le nom donné est arbitraire : ça pourrait être p.ex. "element")
        return <Avatar avatar={person} />;
      })}

      {/*   autre façon de faire - sans map : */}
      {/*  <Avatar avatar = {simpsonList[0]}/> 
      <Avatar avatar = {simpsonList[1]}/>  */}
    </div>
  );
}

export default App;
