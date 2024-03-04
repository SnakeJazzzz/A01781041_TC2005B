using UnityEngine;

public class BoundaryTrigger : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("dot")) // Ensure this matches the tag you created
        {
            FindObjectOfType<GameController>().AddPoint(gameObject.name);
        }
    }
}
