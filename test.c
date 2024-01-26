#include <stdio.h>

struct Donnees {
    int x;
    int y;
    char nom[20];
};

void fonctionAvecStructure(struct Donnees data) {
    printf("Fonction avec structure : x = %d, y = %d, nom = %s\n", data.x, data.y, data.nom);
}

void fonctionAppelanteAvecStructure() {
    struct Donnees donnees = { 10, 20, "John" };
    fonctionAvecStructure(donnees);
}


#include <stdio.h>

void fonctionAvecArguments(int x, int y, const char *nom) {
    printf("Fonction avec arguments distincts : x = %d, y = %d, nom = %s\n", x, y, nom);
}

void fonctionAppelanteAvecArguments() {
    int x = 10;
    int y = 20;
    const char *nom = "John";
    fonctionAvecArguments(x, y, nom);
}
