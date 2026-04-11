{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    inputs:
    let
      forEachSystems =
        function:
        inputs.nixpkgs.lib.genAttrs inputs.nixpkgs.lib.systems.flakeExposed (system: function system);
    in
    {
      formatter = forEachSystems (system: inputs.nixpkgs.legacyPackages.${system}.nixfmt-rfc-style);
      devShells = forEachSystems (
        system:
        let
          pkgs = inputs.nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.mkShell {
            nativeBuildInputs = with pkgs; [
              astro-language-server
              nodejs
              typescript-language-server
              yarn
            ];
          };
        }
      );
    };
}
