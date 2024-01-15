export function Tuote() {
    return (
      <div>
           <div>
              <h1>Bliw Saippua</h1>
              <div>männyntuoksuinen hieno saippua</div>
              <div>2.30€</div>
              <button onClick={ostosValittu} className="btn btn-success">Lisää koriin</button>
           </div>
      </div>
    );
}

function ostosValittu() {
    alert("Mänty")
}
