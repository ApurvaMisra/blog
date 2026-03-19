from datetime import datetime


def on_config(config):
    year = datetime.now().year
    config["copyright"] = (
        f'&copy; {year} <a href="https://github.com/ApurvaMisra"'
        f'  target="_blank" rel="noopener">Apurva Misra</a>'
    )
    return config
