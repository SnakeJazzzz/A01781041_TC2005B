using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public List<Button> buttons; // Botones que representan los colores
    public TMP_Text scoreText; // Texto para mostrar el puntaje
    private List<int> sequence = new List<int>(); // La secuencia de colores
    private int sequenceIndex = 0; // El índice actual en la secuencia
    private int score = 0; // Puntaje actual
    private bool isSequencePlaying = false; // Si la secuencia se está mostrando
    public TMP_Text messageText; 

    public AudioSource sequenceAudioSource;
    public AudioSource playerAudioSource;
    public AudioSource gameOverAudioSource;



    // Inicia el juego
    public void StartGame()
    {
        score = 0; // Resetear el puntaje
        sequence.Clear(); // Limpiar secuencias previas
        AddColorToSequence(); // Añadir el primer color
        StartCoroutine(ShowSequence()); // Comenzar a mostrar la secuencia
        UpdateScoreText(); // Actualizar el texto del puntaje
    }
    void Start()
    {
        messageText.text = "";
        StartGame();
        
        for (int i = 0; i < buttons.Count; i++)
        {
            int index = i; // Copia para evitar problemas de cierre de lambda
            buttons[i].onClick.AddListener(() => PlayerMove(index));
        }
    }

    // Añade un nuevo color a la secuencia
    void AddColorToSequence()
    {
        sequence.Add(Random.Range(0, buttons.Count));
    }

    // Muestra la secuencia de colores al jugador
    IEnumerator ShowSequence()
    {
        isSequencePlaying = true;
        PlaySequenceTrack();
        messageText.text = "Get Ready for SIMON!";

        foreach (int colorIndex in sequence)
        {
            // Iluminar botón correspondiente
            buttons[colorIndex].GetComponent<Image>().color = Color.red; // Iluminar
            yield return new WaitForSeconds(1f); // Esperar un segundo
            buttons[colorIndex].GetComponent<Image>().color = Color.white; // Apagar
            yield return new WaitForSeconds(1f); // Esperar medio segundo entre colores
        }

        isSequencePlaying = false; // Permitir la entrada del jugador
        messageText.text = "Your Turn Sr.Simon!";
    }



    // Llamado cuando un jugador presiona un botón
    public void PlayerMove(int buttonIndex)
    {
        if (!isSequencePlaying)
        {
            PlayPlayerTrack();
        }
        if (isSequencePlaying) return; // Ignorar clics durante la secuencia

        // Aquí se maneja la lógica de comprobación del movimiento del jugador
        if (sequence[sequenceIndex] == buttonIndex)
        {
            // Jugador acertó
            sequenceIndex++; // Mover al siguiente elemento de la secuencia
            if (sequenceIndex >= sequence.Count)
            {
                // Secuencia completada correctamente
                sequenceIndex = 0; // Resetear para la próxima ronda
                score++; // Incrementar el puntaje
                UpdateScoreText(); // Actualizar el texto del puntaje
                AddColorToSequence(); // Añadir otro color a la secuencia
                StartCoroutine(ShowSequence()); // Mostrar la nueva secuencia
                messageText.text = "Eggs cooking";
            }
        }
        else
        {
            // Jugador falló
         EndGame();
        }
    }


    // Verifica si la secuencia ingresada por el jugador es correcta
    void CheckSequence(int buttonIndex)
    {
        // Lógica para verificar la secuencia
    }

    // Termina el juego
    void EndGame()
    {
        // Mostrar algún mensaje al jugador
        gameOverAudioSource.Play();
        scoreText.text = "Game Over! Score: " + score.ToString();
        messageText.text = "";
    
        // Aquí podrías también deshabilitar los botones o mostrar un botón para reiniciar
    }



    // Actualiza el texto del puntaje
    void UpdateScoreText()
    {
        scoreText.text = "Score: " + score.ToString();
    }

    public void RestartGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
    public void PlaySequenceTrack()
    {
        playerAudioSource.Stop();
        sequenceAudioSource.Play();
    }

    public void PlayPlayerTrack()
    {
        sequenceAudioSource.Stop();
        playerAudioSource.Play();
    }

}