import React from 'react';
  
const Solutions = () => {
    let solutions = [
        {
            id: 1,
            name: 'Ecommerce Compre-Bem'
        },
        {
            id: 2,
            name: 'Ecommerce Submarino'
        },
        {
            id: 3,
            name: 'Ecommerce Mercado Livre'
        },
    ];
  return (
    <>
      <h1>Soluções</h1>
      <div
        style={{
        }}
      >
        <div style={{
          color: 'blue',
          fontWeight: 'bold'
        }}>
          Soluções para o seu restaurante.
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus, fugiat quaerat suscipit, veritatis delectus placeat minima dolorem ex earum cumque. Ea molestias nostrum sequi eligendi, ad similique provident numquam?
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio ab, fugiat perspiciatis in, ducimus sequi fuga minima molestiae voluptatum vero corporis repellat totam doloremque, vitae sint voluptates dolorem quod!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio ab, fugiat perspiciatis in, ducimus sequi fuga minima molestiae voluptatum vero corporis repellat totam doloremque, vitae sint voluptates dolorem quod!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio ab, fugiat perspiciatis in, ducimus sequi fuga minima molestiae voluptatum vero corporis repellat totam doloremque, vitae sint voluptates dolorem quod!
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur libero cumque natus beatae optio exercitationem aliquam dolor! Accusamus culpa molestiae tenetur eligendi! Nulla corrupti, eligendi voluptate quam velit nesciunt.
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum laborum ut sapiente quod! Tempore inventore hic repellat dolorem quis ipsum, facilis dicta sequi deserunt. Adipisci totam repudiandae molestias consequuntur!
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio ab,
        </div>
        <div style={
                      {backgroundColor: 'blue',
                      width: 1280, 
                      height: 700,
                      verticalAlign: 'middle' 
                      }}>

        </div>
          {/* {solutions.map((s) => (
              <div>
                  <table>
                      <tr>
                          <td>{s.name}</td>
                      </tr>
                  </table>
              </div>
          ))}
        <h1>Our phonenumber is 55 999-9999</h1> */}
      </div>
    </>
  );
};
  
export default Solutions;