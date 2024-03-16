using UnityEngine;

[RequireComponent(typeof(AudioSource))] // This line ensures there's an AudioSource on the GameObject.
public class ButtonSound : MonoBehaviour
{
    private AudioSource audioSource; // A variable to reference the AudioSource component.

    void Start()
    {
        // Get the AudioSource component attached to this GameObject.
        audioSource = GetComponent<AudioSource>();
    }

    // Call this method to play the sound.
    public void PlaySound()
    {
        // Checks if there is an AudioClip assigned to the AudioSource.
        if(audioSource.clip != null)
        {
            audioSource.Play(); // Play the AudioClip.
        }
    }
}

