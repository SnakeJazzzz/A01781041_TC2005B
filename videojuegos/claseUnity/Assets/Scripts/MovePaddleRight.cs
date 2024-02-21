using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovePaddleRight : MonoBehaviour
{
    public float speed;
    public KeyCode moveUp;
    public KeyCode moveDown;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(moveUp))
        {
            transform.Translate(Vector3.up * speed * Time.deltaTime);
        }
        if(Input.GetKey(moveDown))
        {
            transform.Translate(Vector3.down * speed * Time.deltaTime);
        }
        
    }
}
