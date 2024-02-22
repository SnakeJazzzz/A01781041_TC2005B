//keep track off scores and ball status
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public GameObject dot;
    public float force;
    // Start is called before the first frame update
    void Start()
    {
        StartGame();
        
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void StartGame(){
        //make the ball move and respect the direction of bounce after hitting paddles or walls
        
        dot.GetComponent<Rigidbody2D>().velocity = Random.onUnitSphere * force;
  
    }
}
