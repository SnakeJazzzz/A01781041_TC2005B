using UnityEngine;
using TMPro;

public class GameController : MonoBehaviour
{
    public GameObject dotPrefab;
    private GameObject dot;
    public float force;
    public int pointsLeft = 0;
    public int pointsRight = 0;
    public TMP_Text scoreLeft;
    public TMP_Text scoreRight;
    
    void Start()
    {
        StartGame();
    }
    
    void StartGame()
    {
        if(dot != null) Destroy(dot); // Ensure there's no existing ball
        
        // Instantiate and launch the ball
        dot = Instantiate(dotPrefab);
        ResetAndLaunchBall();
    }

    public void AddPoint(string wall)
    {
        if (wall == "LeftBoundary")
        {
            pointsRight++;
            scoreRight.text = pointsRight.ToString();
            ResetAndLaunchBall(); // Reset ball position and launch it again
        }
        else if (wall == "RightBoundary")
        {
            pointsLeft++;
            scoreLeft.text = pointsLeft.ToString();
            ResetAndLaunchBall(); // Reset ball position and launch it again
        }
    }

    private void ResetAndLaunchBall()
    {
        dot.transform.position = Vector3.zero; // Reset ball position to the center
        Vector2 launchDirection = new Vector2(Random.Range(-1f, 1f), Random.Range(-0.5f, 0.5f)).normalized; // Randomize launch direction
        dot.GetComponent<Rigidbody2D>().velocity = launchDirection * force; // Apply force
    }
}
